"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

interface CinematicCanvasProps {
  className?: string;
  intensity?: number;
}

export default function CinematicCanvas({
  className = "",
  intensity = 1,
}: CinematicCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check for reduced motion preference
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Dimensions
    let width = currentMount.clientWidth || window.innerWidth;
    let height = currentMount.clientHeight || window.innerHeight;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 8;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // 1. Cinematic Ambient Dust / Floating Particles
    const particleCount = 120;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const opacities = new Float32Array(particleCount);

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20;
      positions[i + 1] = (Math.random() - 0.5) * 12;
      positions[i + 2] = (Math.random() - 0.5) * 10;
      opacities[i / 3] = Math.random() * 0.6 + 0.2;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x41d7ff,
      size: 0.04,
      transparent: true,
      opacity: 0.45 * intensity,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, particleMaterial);
    scene.add(particles);

    // 2. Anamorphic Cinematic Light Streaks / Ribbon Mesh
    const streakCount = 3;
    const streakMeshes: THREE.Mesh[] = [];

    for (let s = 0; s < streakCount; s++) {
      const curve = new THREE.CubicBezierCurve3(
        new THREE.Vector3(-12, -2 + s * 1.5, -2),
        new THREE.Vector3(-4, 1 + s * 0.5, 0),
        new THREE.Vector3(4, -1 - s * 0.5, 1),
        new THREE.Vector3(12, 2 + s * 1.2, -1)
      );

      const tubeGeometry = new THREE.TubeGeometry(curve, 64, 0.08 + s * 0.03, 8, false);
      const tubeMaterial = new THREE.MeshBasicMaterial({
        color: s === 1 ? 0x19bdf2 : 0x086ead,
        transparent: true,
        opacity: (0.28 - s * 0.06) * intensity,
        blending: THREE.AdditiveBlending,
      });

      const streak = new THREE.Mesh(tubeGeometry, tubeMaterial);
      streakMeshes.push(streak);
      scene.add(streak);
    }

    // Mouse Tracking for Smooth Parallax
    let targetX = 0;
    let targetY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      targetX = (event.clientX / window.innerWidth - 0.5) * 2;
      targetY = -(event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    // Handle Resize
    const handleResize = () => {
      if (!currentMount) return;
      width = currentMount.clientWidth;
      height = currentMount.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      mouseX += (targetX - mouseX) * 0.04;
      mouseY += (targetY - mouseY) * 0.04;

      // Slowly rotate particles
      particles.rotation.y = elapsedTime * 0.03 + mouseX * 0.2;
      particles.rotation.x = elapsedTime * 0.015 + mouseY * 0.1;

      // Animate streaks waving gently
      streakMeshes.forEach((mesh, index) => {
        mesh.rotation.z = Math.sin(elapsedTime * 0.2 + index) * 0.05 + mouseY * 0.08;
        mesh.position.y = Math.cos(elapsedTime * 0.3 + index) * 0.15 + mouseY * 0.3;
        mesh.position.x = mouseX * 0.4;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);

      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }

      geometry.dispose();
      particleMaterial.dispose();
      streakMeshes.forEach((mesh) => {
        mesh.geometry.dispose();
        (mesh.material as THREE.Material).dispose();
      });
      renderer.dispose();
    };
  }, [intensity]);

  return (
    <div
      ref={mountRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden z-10 ${className}`}
      aria-hidden="true"
    />
  );
}
