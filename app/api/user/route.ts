import { prisma } from "@/utils/db";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
	const data = await request.json();
	const { email, name, message } = data;
	const user = await prisma.user.create({
		data: {
			email,
			message,
			name,
		},
	});

	return NextResponse.json({ data: user });
}
