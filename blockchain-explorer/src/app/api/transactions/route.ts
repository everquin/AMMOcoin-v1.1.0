import { NextRequest, NextResponse } from 'next/server';
import { getRecentTransactions } from '@/lib/api';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '10');

    const transactions = await getRecentTransactions(Math.min(limit, 50));

    return NextResponse.json({
      success: true,
      data: {
        transactions,
        total: transactions.length,
        page: 1,
        limit,
        hasNext: false,
        hasPrevious: false,
      },
    });
  } catch (error) {
    console.error('API /transactions error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch transactions',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}