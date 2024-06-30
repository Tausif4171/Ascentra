import {NextResponse} from 'next/server';
import Task from '../../(models)/Task'

async function CreateTask( req ) {
	try {
		const body = await req.json()
		const data = body.formData
		const res = await Task.create( data )
		if ( res.ok ) {
			return NextResponse.json({message: 'Task Created Successfully!', status:201})
		}
		else {
			return NextResponse.json({message:'Failed to create', status:500})
		}
	}

}