package com.example.Tutorial.service;

import com.example.Tutorial.entity.Task;
import com.example.Tutorial.repository.TaskRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public Task createTask(Task task) {
        return taskRepository.save(task);
    }

    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }

    public Task getTaskById(Long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public void deleteTaskById(Long id) {
        taskRepository.deleteById(id);
    }

    public Task updateTask(Task updatedTask, Long id) {
        Task existingTask = taskRepository.findById(id).orElse(null);
        existingTask.setDescription(updatedTask.getDescription());
        existingTask.setTaskComplete(updatedTask.isTaskComplete());
        return taskRepository.save(existingTask);
    }

    public Task toggleCompletion(Long id) {
        Task existingTask = taskRepository.findById(id).orElse(null);
        existingTask.setTaskComplete(!existingTask.isTaskComplete());
        return taskRepository.save(existingTask);
    }
}
