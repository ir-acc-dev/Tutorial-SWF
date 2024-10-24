package com.example.Tutorial.controller;

import com.example.Tutorial.entity.Task;
import com.example.Tutorial.service.TaskService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/tasks")
public class TaskController {

    private final TaskService taskService;

    @PostMapping
    public ResponseEntity<Task> createTask(@RequestBody Task task) {
        Task newTask = taskService.createTask(task);
        return new ResponseEntity<>(newTask, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<Task>> getAllTasks() {
        List<Task> tasks = taskService.getAllTasks();
        return ResponseEntity.ok(tasks);
    }

    @GetMapping ("{id}")
    public ResponseEntity<Task> getTaskById(@PathVariable Long id) {
        Task specificTask = taskService.getTaskById(id);
        return ResponseEntity.ok(specificTask);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteTask(@PathVariable Long id) {
        taskService.deleteTaskById(id);
        return ResponseEntity.ok("Task deleted");
    }

    @PutMapping("{id}")
    public ResponseEntity<Task> updateTask(@RequestBody Task task, @PathVariable Long id) {
        Task updatedTask = taskService.updateTask(task, id);
        return ResponseEntity.ok(updatedTask);
    }

    @PutMapping("{id}/complete")
    public ResponseEntity<Task> toggleCompletion(@PathVariable Long id) {
        Task updatedTaskCompletion = taskService.toggleCompletion(id);
        return ResponseEntity.ok(updatedTaskCompletion);
    }
}
