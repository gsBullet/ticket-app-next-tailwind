import Ticket from "@/app/(models)/TicketModels";

const { NextResponse } = require("next/server");

export async function POST(req) {
    // console.log(req);
    try {
        const body = await req.json();
        const ticketData = body.formData;
        const response = await Ticket.create(ticketData);
        return NextResponse.json({ message: "Ticket Created Succesfully" }, { status: 201 })
    } catch (error) {
        return NextResponse.json({ message: "error", error }, { status: 500 })
    }
}

export async function GET() {
    try {
        const tickets = await Ticket.find();

        return NextResponse.json({ tickets }, { status: 200 })
    } catch (error) {
        return NextResponse.json({ message: "error", error }, { status: 500 })
    }
}