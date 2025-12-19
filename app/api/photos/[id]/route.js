import { NextResponse } from "next/server";
import { getPhotoById } from "@/lib/image-data";

export async function GET(request, { params }) {
    const { id } = await params;
    const photo = await getPhotoById(id);

    if (photo) {
        return NextResponse.json(photo);
    } else {
        return NextResponse.json({ error: "Photo not found" }, { status: 404 });
    }
}