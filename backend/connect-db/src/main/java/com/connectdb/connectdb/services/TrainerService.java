package com.connectdb.connectdb.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.connectdb.connectdb.model.Trainer;
import com.connectdb.connectdb.repository.TrainerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class TrainerService {
    private final TrainerRepository trainerRepository;

    @Autowired
    public TrainerService(TrainerRepository trainerRepository) {
        this.trainerRepository = trainerRepository;
    }

    public List<Trainer> getAllCoaches() {
        return trainerRepository.findAll();
    }

    public Trainer saveTrainer(Trainer trainer) {
        return trainerRepository.save(trainer);
    }

    public void deleteAllCoaches() {
        trainerRepository.deleteAll();
    }

    public boolean deleteTrainerById(Long id) {
        Optional<Trainer> trainerOptional = trainerRepository.findById(id);
        if (trainerOptional.isPresent()) {
            trainerRepository.deleteById(id);
            return true;
        }
        return false;
    }
    public Trainer getTrainerById(Long id) {
        return trainerRepository.findById(id).orElse(null);
    }

    public Trainer getTrainerByNome(String nome) {
        return trainerRepository.findByNome(nome);
    }

}
