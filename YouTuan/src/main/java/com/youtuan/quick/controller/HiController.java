package com.youtuan.quick.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HiController {

  @Value("${event.name}")
  private String name;

  @RequestMapping("/sayHi")
  public String sayHi() {
    return "Hi " + name;
  }
}
