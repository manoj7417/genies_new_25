export async function POST(req) {
    try {
        const { resumeText } = await req.json();

        if (!resumeText) {
            return new Response(JSON.stringify({ message: 'resumeText is required' }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' },
            });
        }

        const feedback = `Received ${resumeText.length} characters.`;

        return new Response(JSON.stringify({ feedback }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}

export function OPTIONS() {
    return new Response(null, {
        status: 204,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type',
        },
    });
}
