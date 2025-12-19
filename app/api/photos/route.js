import { NextResponse } from "next/server";
import { getAllPhotos } from "@/lib/image-data";

export async function GET() {
    const photos = await getAllPhotos();
    return NextResponse.json(photos);
}