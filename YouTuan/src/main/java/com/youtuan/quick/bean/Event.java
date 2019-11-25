package com.youtuan.quick.bean;

import java.util.Date;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.ImportResource;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "event")
public class Event {

//  @Value("${event.name}")
  private String name;
//  @Value("#{11*2}")
  private Integer eventId;
//  @Value("true")
  private boolean open;
  private String category;
  private Date startDate;

  private Map<String, Object> maps;
  private List<Object> lists;

  @Override
  public String toString() {
    return "Event{" +
        "name='" + name + '\'' +
        ", eventId=" + eventId +
        ", open=" + open +
        ", category='" + category + '\'' +
        ", startDate=" + startDate +
        ", maps=" + maps +
        ", lists=" + lists +
        '}';
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public Integer getEventId() {
    return eventId;
  }

  public void setEventId(Integer eventId) {
    this.eventId = eventId;
  }

  public boolean isOpen() {
    return open;
  }

  public void setOpen(boolean open) {
    this.open = open;
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public Date getStartDate() {
    return startDate;
  }

  public void setStartDate(Date startDate) {
    this.startDate = startDate;
  }

  public Map<String, Object> getMaps() {
    return maps;
  }

  public void setMaps(Map<String, Object> maps) {
    this.maps = maps;
  }

  public List<Object> getLists() {
    return lists;
  }

  public void setLists(List<Object> lists) {
    this.lists = lists;
  }
}
