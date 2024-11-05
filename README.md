

# NestJS StudentsRecords API Testing Guide

---

## API Endpoints Overview

The following are the main API endpoints of the NestJS application for managing students:

- **POST /students/createStudent** - Create a new student.
- **GET /students/getAllStudents** - Retrieve all students.
- **POST /students/getOneStudent/:id** - Retrieve a student by their unique ID.
- **PUT /students/updateStudent/:id** - Update an existing student by their ID.
- **DELETE /students/deleteStudent:id** - Delete a student by their ID.

---


## Testing the API

### POST - Create Student

- **Endpoint**: `POST /students/createStudent`
- **Description**: Creates a new student.
- **Request Body**: 

```json
{
  "firstName": "Salaar",
  "lastName": "Khan",
  "email": "salaar.khan@test.com",
  "dateOfBirth": "2000-06-15T00:00:00.000Z",
  "address": {
    "country": "Pakistan",
    "city": "Karachi",
    "location": "Clifton"
  },
  "phoneNumber": "03211234567",
  "courses": [
    {
      "name": "Mathematics",
      "description": "Advanced Calculus and Algebra"
    },
    {
      "name": "Computer Science",
      "description": "Introduction to Programming and Data Structures"
    }
  ],
  "grades": [
    {
      "subject": "Mathematics",
      "score": 95
    },
    {
      "subject": "Computer Science",
      "score": 88
    }
  ]
}
```

---

### GET - Get All Students

- **Endpoint**: `GET /students/getAllStudents`
- **Description**: Retrieves all students.
- **Response**: 

```json
[
  {
    "_id": "67285baa51387a697628684e",
    "firstName": "John",
    "lastName": "Doe",
    "email": "jogn@gmail.com",
    "dateOfBirth": "2000-01-01T00:00:00.000Z",
    "address": {
      "country": "USA",
      "city": "New York",
      "location": "123 Main St, Apt 4B"
    },
    "phoneNumber": "+1234567890",
    "courses": [
      {
        "name": "Mathematics",
        "description": "An advanced course in mathematics."
      },
      {
        "name": "History",
        "description": "A comprehensive study of world history."
      }
    ],
    "grades": [
      {
        "subject": "Mathematics",
        "score": 95
      },
      {
        "subject": "History",
        "score": 88
      }
    ]
  },
  ...
]
```

---

### GET - Get Student by ID

- **Endpoint**: `POST /students/getOneStudent/:id`
- **Description**: Retrieves a student by their unique ID.
- **Example Request**: `POST /students/getOneStudent/672993a209c369378c9a4af9`
- **Response**: The response will be a single student object (as shown in the "Create Student" response).

---

### PUT - Update Student

- **Endpoint**: `PUT /students/updateStudent/:id`
- **Description**: Updates the information of an existing student by their ID.
- **Request Body**: 

```json
{
  "email":"example@gmail.com"
}
```


---

### DELETE - Delete Student

- **Endpoint**: `DELETE /students/deleteStudent/:id`
- **Description**: Deletes a student by their ID.
- **Example Request**: `DELETE /students/deleteStudent/672993a209c369378c9a4af9`
- **Response**:

```json
{
  "message": "Student deleted successfully"
}
```

---

