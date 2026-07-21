import { NextResponse } from "next/server";
import { mkdir, appendFile } from "fs/promises";
import path from "path";

type Payload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  profile?: string;
  companions?: number;
  source?: string;
  newsletter?: boolean;
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Payload;
    const firstName = String(body.firstName || "").trim();
    const lastName = String(body.lastName || "").trim();
    const email = String(body.email || "").trim().toLowerCase();
    const phone = String(body.phone || "").trim();
    const profile = String(body.profile || "").trim();
    const companions = Number(body.companions || 0);
    const source = String(body.source || "site").trim();
    const newsletter = Boolean(body.newsletter);

    if (!firstName || !lastName || !email || !profile) {
      return NextResponse.json(
        { ok: false, error: "Merci de remplir tous les champs obligatoires." },
        { status: 400 },
      );
    }

    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "L'adresse e-mail n'est pas valide." },
        { status: 400 },
      );
    }

    if (companions < 0 || companions > 10) {
      return NextResponse.json(
        { ok: false, error: "Nombre d'accompagnants invalide." },
        { status: 400 },
      );
    }

    const entry = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      firstName,
      lastName,
      email,
      phone,
      profile,
      companions,
      source,
      newsletter,
    };

    const dataDir = path.join(process.cwd(), "data");
    await mkdir(dataDir, { recursive: true });
    await appendFile(
      path.join(dataDir, "inscriptions.jsonl"),
      `${JSON.stringify(entry)}\n`,
      "utf8",
    );

    return NextResponse.json({ ok: true, id: entry.id });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Erreur serveur. Réessayez dans un instant." },
      { status: 500 },
    );
  }
}
