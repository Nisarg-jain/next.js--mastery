// src/app/comments/route.ts
import { comments } from "./data";

// GET handler to retrieve all comments
export async function GET() {
  return Response.json(comments);
}

// POST handler to add a new comment
export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}