package com.projectPokedex.Pokedex.controller;

import java.io.IOException;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.projectPokedex.Pokedex.model.Pokemon;
import com.projectPokedex.Pokedex.service.PokemonService;

@RestController
@CrossOrigin
@RequestMapping("/api/pokemon")
public class PokemonController {
    @Autowired
    private PokemonService pokemonService;

    @GetMapping("/{input}")
    public Pokemon getPokemon(@PathVariable String input) throws IOException {
        return pokemonService.getPokemon(input);
    }
    @GetMapping("/list")
    public List<Map<String, Object>> getPokemonListWithInfo(@RequestParam(defaultValue = "151") int limit) throws IOException {
        return pokemonService.getPokemonList(limit);
    }
}

