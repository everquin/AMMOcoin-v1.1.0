import { NextRequest, NextResponse } from 'next/server';
import { getNetworkStats } from '@/lib/api';

export async function GET() {
  try {
    const stats = await getNetworkStats();

    return NextResponse.json({
      success: true,
      data: stats,
    });
  } catch (error) {
    console.error('API /stats error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch network statistics',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}