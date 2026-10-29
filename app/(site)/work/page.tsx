import React from "react";
import { getProjects } from "@/lib/data/projects";
import WorkGridClient from "./WorkGridClient";

export const dynamic = "force-dynamic";

export default async function WorkPage() {
  const projects = await getProjects();
  return <WorkGridClient projects={projects} />;
}
