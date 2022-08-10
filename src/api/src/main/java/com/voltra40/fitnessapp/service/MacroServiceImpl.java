package com.voltra40.fitnessapp.service;

import com.voltra40.fitnessapp.model.Macro;
import com.voltra40.fitnessapp.repository.MacroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class MacroServiceImpl implements MacroService {

    @Autowired
    private final MacroRepository macroRepository;

    public MacroServiceImpl(MacroRepository macroRepository) {
        this.macroRepository = macroRepository;
    }

    @Override
    public List<Macro> getMacros() {
        return macroRepository.findAll();
    }

    @Override
    public void addMacro(Macro macro) {
        macroRepository.save(macro);
    }

    @Override
    public void updateMacro(Long macroId, Macro updatedMacro) {
        if (!macroRepository.existsById(macroId)) {
            throw new IllegalArgumentException("macro does not exist");
        }
        macroRepository.findById(macroId).map(macro -> {
            if (updatedMacro.getMeal() != "") macro.setMeal(updatedMacro.getMeal());
            if (updatedMacro.getCalories() != 0.0) macro.setCalories(updatedMacro.getCalories());
            if (updatedMacro.getFat() != 0.0) macro.setFat(updatedMacro.getFat());
            if (updatedMacro.getCarbs() != 0.0) macro.setCarbs(updatedMacro.getCarbs());
            if (updatedMacro.getProtein() != 0.0) macro.setProtein(updatedMacro.getProtein());
            if (updatedMacro.getDate() != LocalDate.now() && updatedMacro.getDate() != null && updatedMacro.equals("")) macro.setDate(updatedMacro.getDate());
            return macroRepository.save(macro);
        });
    }

    @Override
    public void deleteMacro(Long macroId) {
        if (!macroRepository.existsById(macroId)) {
            throw new IllegalArgumentException("macro does not exist");
        }
        macroRepository.deleteById(macroId);
    }
}
