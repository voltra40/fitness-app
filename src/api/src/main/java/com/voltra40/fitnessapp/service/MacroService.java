package com.voltra40.fitnessapp.service;

import com.voltra40.fitnessapp.model.Macro;

import java.util.List;

public interface MacroService {
    List<Macro> getMacros();
    void addMacro(Macro macro);
    void updateMacro(Long macroId, Macro macro);
    void deleteMacro(Long macroId);
}
