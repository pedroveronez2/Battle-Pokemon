package com.projectPokedex.Pokedex.model;

import java.util.List;
import java.util.Map;

public class Pokemon {
    private int id;
    private String name;
    private List<String> types;
    private List<String> abilities;
    private String image_back;
    private String image_front;
    private Map<String, Integer> stats;
    private String frontAnimatedImage; 
    private String backAnimatedImage;
    
    public Pokemon(int id, String name, List<String> types, List<String> abilities, String image_back, String image_front, String frontAnimatedImage, String backAnimatedImage, Map<String, Integer> stats) {
        this.id = id;
        this.name = name;
        this.types = types;
        this.abilities = abilities;
        this.image_back = image_back;
        this.image_front = image_front;
        this.frontAnimatedImage = frontAnimatedImage;
        this.backAnimatedImage = backAnimatedImage;
        this.stats = stats;
    }

    
    public Map<String, Integer> getStats() {
        return stats;
    }

    public String getImage_back() {
        return image_back;
    }


    public String getFrontAnimatedImage() {
        return frontAnimatedImage;
    }


    public void setFrontAnimatedImage(String frontAnimatedImage) {
        this.frontAnimatedImage = frontAnimatedImage;
    }


    public String getBackAnimatedImage() {
        return backAnimatedImage;
    }


    public void setBackAnimatedImage(String backAnimatedImage) {
        this.backAnimatedImage = backAnimatedImage;
    }


    public String getImage_front() {
        return image_front;
    }


    public int getId() {
        return id;
    }
    public List<String> getabilities() {
        return abilities;
    }

    public String getName() {
        return name;
    }

    public List<String> getTypes() {
        return types;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setTypes(List<String> types) {
        this.types = types;
    }

    public void setabilities(List<String> abilities) {
        this.abilities = abilities;
    }


    public void setImage_back(String image_back) {
        this.image_back = image_back;
    }

    public void setStats(Map<String, Integer> stats) {
        this.stats = stats;
    }

    public void setImage_front(String image_front) {
        this.image_front = image_front;
    }

    
}
