package com.connectdb.connectdb.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.connectdb.connectdb.model.Trainer;

@Repository
public interface TrainerRepository extends JpaRepository<Trainer, Long> {
    Trainer findByNome(String nome);
    Trainer findByEmail(String email);

}



