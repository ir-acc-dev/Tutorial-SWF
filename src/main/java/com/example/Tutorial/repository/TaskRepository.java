package com.example.Tutorial.repository;

import com.example.Tutorial.entity.Task;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<Task, Long> {
}
