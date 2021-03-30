package pro.marian.todolist.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import pro.marian.todolist.model.Task;

import java.util.Optional;

public interface TaskRepo extends JpaRepository<Task, Long> {
    void deleteTaskById(Long id);

    Optional<Task> findTaskById(Long id);
}
