# Theater webshop



# Learning about MVC Pattern in JavaScript

This repository contains a project aimed at learning the Model-View-Controller (MVC) pattern and how it can be applied in JavaScript to create interactive websites. Additionally, the project utilizes conditional selects to render specific pictures and implements client-side storage for a seamless user experience.

## Table of Contents

1. [Introduction](#introduction)
2. [MVC Pattern Overview](#mvc-pattern-overview)
3. [Project Structure](#project-structure)
4. [Conditional Selects](#conditional-selects)
5. [Client-Side Storage](#client-side-storage)


## Introduction

The MVC pattern is a software architectural pattern that separates an application into three interconnected components: Model, View, and Controller. This project demonstrates how to implement the MVC pattern in JavaScript to build interactive web applications. The project also includes features like conditional selects and client-side storage to enhance interactivity and user experience.

## MVC Pattern Overview

- **Model**: Represents the data and the business logic of the application. It manages the data, logic, and rules of the application.
- **View**: Represents the user interface of the application. It displays the data from the Model to the user and sends user commands to the Controller.
- **Controller**: Acts as an intermediary between the Model and the View. It listens to user inputs from the View, processes them (possibly altering the Model), and updates the View accordingly.

## Project Structure

The project is organized into the following directories and files:

- `/models` - Contains the data structures and business logic.
- `/views` - Contains the user interface components.
- `/controllers` - Contains the logic to connect Models and Views.
- `/assets` - Contains images and other static resources.
- `/storage` - Contains scripts for managing client-side storage.

## Conditional Selects

Conditional selects are used to render specific pictures based on user inputs. This feature allows users to make selections that dynamically change the displayed content. For example, selecting a category from a dropdown menu might render a set of related images.

## Client-Side Storage

Client-side storage is implemented using `localStorage` or `sessionStorage`. This feature allows the application to store user preferences, selections, and other data directly in the user's browser. It ensures that user data persists across sessions and improves the overall user experience.

