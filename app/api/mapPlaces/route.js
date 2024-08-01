import fs from "fs/promises";
import { NextResponse } from "next/server";
export const GET = async (request) => {
  try {
    const data = await fs.readFile(
      process.cwd() + "/data/MapData.json",
      "utf8"
    );
    return NextResponse.json(JSON.parse(data), { status: 200 });
  } catch (error) {
    console.error("Failed to read the file:", error);
    return NextResponse.json({ error: "Failed to load trivia data" }, { status: 500 });
  }
};