export async function runChat(prompt) {
  const res = await fetch("http://localhost:5000/api/gemini", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ prompt }),
  });

  if (!res.ok) throw new Error("Failed to fetch Gemini response");

  const data = await res.json();
  return data.text;
}
