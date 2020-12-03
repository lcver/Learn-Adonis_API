'use strict'

const Student = use('App/Models/Student')

class StudentController {
    async store({request, response}) {
        const studentInfo = request.only(['nisn','name','study'])
        const student = new Student()

        student.nisn = studentInfo.nisn
        student.name = studentInfo.name
        student.study = studentInfo.study

        await student.save()

        return response.status(201).json(student)
    }


    async index({response}) {
        let students = await Student.all()

        return response.json(students)
    }

    async show({params, response}) {
        const student = await Student.find(params.id)

        return response.json(student)
    }
}

module.exports = StudentController
