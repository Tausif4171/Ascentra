import {NextResponse} from 'next/server';
import Task from '../../(models)/Task'

export async function POST(req) {
	console.log('test')
	try {
		const body = await req.json()
		const data = body.formData
		const res = await Task.create(data)
		if (res) {
			return NextResponse.json( {message: 'Task Created Successfully!'}, {status: 201} )
		}
	}
	catch ( error ) {
		return NextResponse.json( {message: 'Failed to create', error}, {status: 500} )
	}
}