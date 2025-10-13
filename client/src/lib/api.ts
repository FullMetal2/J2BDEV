const API = import.meta.env.VITE_API_URL;

export type Project = {
  id: number;
  title: string;
  cover?: string;
  summary: string;
  tags: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  training?: boolean;
};

export type ProjectsResponse = { items: Project[] };
export type ApiError = Error & { status?: number; data?: unknown };

async function json<T>(res: Response): Promise<T> {
  if (!res.ok) {
    const errBody = await res.json().catch(() => ({}));
    throw Object.assign(new Error("Request failed"), {
      status: res.status,
      data: errBody,
    } as ApiError);
  }
  return res.json() as Promise<T>;
}

export const api = {
  getProjects: () =>
    fetch(`${API}/api/projects`, { credentials: "include" }).then(
      json<ProjectsResponse>
    ),

  getProject: (id: number) =>
    fetch(`${API}/api/projects/${id}`).then(json<Project>),

  sendContact: (payload: { name: string; email: string; message: string }) =>
    fetch(`${API}/api/contact`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    }).then(json<{ ok: true }>),
};
