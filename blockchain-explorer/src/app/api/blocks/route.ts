import { NextRequest, NextResponse } from 'next/server';
import { getLatestBlocks } from '@/lib/api';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const limit = parseInt(searchParams.get('limit') || '10');
    const offset = parseInt(searchParams.get('offset') || '0');

    // For now, we just get the latest blocks without pagination
    // Full pagination would require additional RPC calls
    const blocks = await getLatestBlocks(Math.min(limit, 50));

    return NextResponse.json({
      success: true,
      data: {
        blocks: blocks.slice(offset, offset + limit),
        total: blocks.length,
        page: Math.floor(offset / limit) + 1,
        limit,
        hasNext: offset + limit < blocks.length,
        hasPrevious: offset > 0,
      },
    });
  } catch (error) {
    console.error('API /blocks error:', error);

    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch blocks',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
}