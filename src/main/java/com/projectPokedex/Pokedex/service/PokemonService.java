package com.projectPokedex.Pokedex.service;

import org.springframework.stereotype.Service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.projectPokedex.Pokedex.model.Pokemon;

import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class PokemonService {
    private final OkHttpClient httpClient = new OkHttpClient();

    public Pokemon getPokemon(String input) throws IOException {
        String apiUrl;
        if (input.matches("\\d+")) {
            apiUrl = "https://pokeapi.co/api/v2/pokemon/" + input;
        } else {
            apiUrl = "https://pokeapi.co/api/v2/pokemon/" + input.toLowerCase();
        }

        Request request = new Request.Builder().url(apiUrl).build();

        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Unexpected response code: " + response);
            }

            String responseBody = response.body().string();
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode responseData = objectMapper.readTree(responseBody);

            int id = responseData.get("id").asInt();
            String name = responseData.get("name").asText();
            List<String> types = new ArrayList<>();
            List<String> abilities = new ArrayList<>();
            String frontImage = responseData.get("sprites").get("front_default").asText();
            String backImage = responseData.get("sprites").get("back_default").asText();
            String frontAnimatedImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/" + id + ".gif";
            String backAnimatedImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/" + id + ".gif";

            for (JsonNode typeNode : responseData.get("types")) {
                types.add(typeNode.get("type").get("name").asText());
            }
            for (JsonNode abilitiesNode : responseData.get("abilities")) {
                abilities.add(abilitiesNode.get("ability").get("name").asText());
            }

            Map<String, Integer> stats = new HashMap<>();
            for (JsonNode statNode : responseData.get("stats")) {
                String statName = statNode.get("stat").get("name").asText();
                int statValue = statNode.get("base_stat").asInt();
                stats.put(statName, statValue);
            }

            return new Pokemon(id, name, types, abilities, frontImage, backImage, frontAnimatedImage, backAnimatedImage, stats);
        }
    }
    public List<Map<String, Object>> getPokemonList(int limit) throws IOException {
        List<Map<String, Object>> pokemonListWithInfo = new ArrayList<>();
        String apiUrl = "https://pokeapi.co/api/v2/pokemon?limit="+limit ;
    
        Request request = new Request.Builder().url(apiUrl).build();
    
        try (Response response = httpClient.newCall(request).execute()) {
            if (!response.isSuccessful()) {
                throw new IOException("Unexpected response code: " + response);
            }
    
            String responseBody = response.body().string();
            ObjectMapper objectMapper = new ObjectMapper();
            JsonNode responseData = objectMapper.readTree(responseBody);
    
            for (JsonNode resultNode : responseData.get("results")) {

                String pokemonName = resultNode.get("name").asText();
                String pokemonUrl = resultNode.get("url").asText();
                int pokemonId = Integer.parseInt(pokemonUrl.split("/")[6]); 
    
                String frontImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemonId + ".png";
                String pokemonDetailUrl = "http://localhost:8080/api/pokemon/" + pokemonId;
    
                Map<String, Object> pokemonInfo = new HashMap<>();
                pokemonInfo.put("id", pokemonId);

                pokemonInfo.put("name", pokemonName);
                pokemonInfo.put("frontImage", frontImage);
                pokemonInfo.put("url", pokemonDetailUrl);
    
                pokemonListWithInfo.add(pokemonInfo);
            }
        }
    
        return pokemonListWithInfo;
    }
    
    
    
    
}


