import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Doctor from '@/models/Doctor';

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const experience = searchParams.get('experience');
    const fees = searchParams.get('fees');
    const language = searchParams.get('language');
    const mode = searchParams.get('mode');

    let query = {};

    if (experience) {
      const [min, max] = experience.split('-').map(Number);
      query.experience = { $gte: min, $lte: max };
    }

    if (fees) {
      const [min, max] = fees.split('-').map(Number);
      query.fee = { $gte: min, $lte: max };
    }

    if (language) {
      query.languages = language;
    }

    if (mode === 'online') {
      query.availableForOnline = true;
    } else if (mode === 'hospital') {
      query.availableForHospitalVisit = true;
    }

    const skip = (page - 1) * limit;

    const doctors = await Doctor.find(query)
      .skip(skip)
      .limit(limit);

    const total = await Doctor.countDocuments(query);

    return NextResponse.json({
      doctors,
      total,
      page,
      totalPages: Math.ceil(total / limit),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch doctors' },
      { status: 500 }
    );
  }
} 