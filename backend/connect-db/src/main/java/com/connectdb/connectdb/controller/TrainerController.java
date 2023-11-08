package com.connectdb.connectdb.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.connectdb.connectdb.model.Trainer;
import com.connectdb.connectdb.services.TrainerService;

import java.util.List;

@RestController
@RequestMapping("/trainer")
public class TrainerController {
    private final TrainerService trainerService;

    @Autowired
    public TrainerController(TrainerService trainerService) {
        this.trainerService = trainerService;
    }

    @GetMapping("/coaches")
    public List<Trainer> getAllTrainers() {
        return trainerService.getAllCoaches();
    }

    @PostMapping
    public Trainer addTrainer(@RequestBody Trainer trainer) {
        return trainerService.saveTrainer(trainer);
    }

    @DeleteMapping
    public String deleteAllCoaches() {
        trainerService.deleteAllCoaches();
        return "All Coaches have been deleted successfully.";
    }

    @DeleteMapping("/{id}")
    public String deleteTrainerById(@PathVariable Long id) {
        if (trainerService.deleteTrainerById(id)) {
            return "Trainer with ID " + id + " has been deleted successfully.";
        } else {
            return "Trainer with ID " + id + " not found.";
        }
    }
    @GetMapping("/{id}")
    public ResponseEntity<Trainer> getTrainer(@PathVariable Long id) {
        Trainer trainer = trainerService.getTrainerById(id);

        if (trainer != null) {
            return new ResponseEntity<>(trainer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/by-name/{nome}")
    public ResponseEntity<Trainer> getTrainerByNome(@PathVariable String nome) {
        Trainer trainer = trainerService.getTrainerByNome(nome);

        if (trainer != null) {
            return new ResponseEntity<>(trainer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/by-email/{email}")
    public ResponseEntity<Trainer> getTrainerByemail(@PathVariable String email) {
        Trainer trainer = trainerService.getTrainerByNome(email);

        if (trainer != null) {
            return new ResponseEntity<>(trainer, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}


