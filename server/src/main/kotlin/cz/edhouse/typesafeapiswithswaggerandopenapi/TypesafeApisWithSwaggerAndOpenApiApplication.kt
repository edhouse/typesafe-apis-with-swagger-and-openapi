package cz.edhouse.typesafeapiswithswaggerandopenapi

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController

@SpringBootApplication
class TypesafeApisWithSwaggerAndOpenApiApplication

fun main(args: Array<String>) {
    runApplication<TypesafeApisWithSwaggerAndOpenApiApplication>(*args)
}

enum class NoteStatus {
    OPEN, CLOSED, ARCHIVED
}

data class NoteTask(val id: Long, val title: String, val status: NoteStatus)

data class Note(val id: Long, val title: String, val status: NoteStatus, val text: String?, val list: List<NoteTask>? = null)

@RestController
class NotesController {

    @GetMapping("/api/notes")
    fun getNotes() = listOf(
            Note(1, "EdConnect", NoteStatus.ARCHIVED, "Create a demo application and learn Kotlin basics"),
            Note(2, "EdConnect", NoteStatus.OPEN, "Show a demo application to the audience"),
            Note(3, "Shopping list", NoteStatus.OPEN, null, listOf(
                    NoteTask(1, "Flour", NoteStatus.OPEN),
                    NoteTask(2, "Sugar", NoteStatus.OPEN),
                    NoteTask(3, "Salt", NoteStatus.CLOSED),
                    NoteTask(4, "Oil", NoteStatus.ARCHIVED),
            )),
    )
}