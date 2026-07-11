import { NextResponse } from "next/server";
import { getProjectById } from "@/lib/projects-db";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const { id } = await params;
  const projectId = Number(id);

  if (Number.isNaN(projectId)) {
    return NextResponse.json(
      { message: "Invalid project id." },
      { status: 400 },
    );
  }

  const project = getProjectById(projectId);

  if (!project) {
    return NextResponse.json(
      { message: "Project not found." },
      { status: 404 },
    );
  }

  return NextResponse.json(project);
}
