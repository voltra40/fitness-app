package com.voltra40.fitnessapp.controller;

import com.voltra40.fitnessapp.model.Macro;
import com.voltra40.fitnessapp.service.MacroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin("*")
public class MacroController {
    @Autowired
    private final MacroService macroService;

    public MacroController(MacroService macroService) {
        this.macroService = macroService;
    }

    @GetMapping
    public List<Macro> getMacros() {
        return macroService.getMacros();
    }

    @PostMapping
    public void addMacro(@RequestBody Macro macro) {
        macroService.addMacro(macro);
    }

    @PutMapping
    public void updateMacro(@RequestParam(name = "id") Long macroId, @RequestBody Macro macro) {
        macroService.updateMacro(macroId, macro);
    }

    @DeleteMapping
    public void deleteMacro(@RequestParam(name = "id") Long macroId) {
        macroService.deleteMacro(macroId);
    }
}
