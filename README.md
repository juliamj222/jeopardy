# Jeopardy Board

Jeopardy! The great American quiz show has been a staple of network television since the 60s. 

## Stories

## The Landing Page

**When** the user visits the `index.html` file.

**Then** they see the landing page.

**And** a "Play" button centered below the image.

**And** a footer displaying site information.

## Navigation to First Round

**Given** the user is on the landing page.

**When** they click the "Play" button.

**Then** they are routed to the first round page.

## First Round

**Given** the user is on the first round page.

**Then** they see a title, that indicates it's the first round.

**And** they see a subtitle that indicates whose turn it is.

**And** a 6X6 grid with category names across the top row, and points from 200 - 1000 below each category, doubling in each row.

**And** they see a box to enter their input, a Guess button, a Pass button.

**And** they see the scores of Player 1 and Player 2 displayed.


## Second Round Navigation

**Given** the user is on the first round page.

**When** they click the button to navigate to the second round page.

**Then** they are taken to the second round page.

## Second Round Page

**Given** the user is on the second round page.

**Then** they see a title, that indicates it's the second round.

**And** they see a subtitle that indicates whose turn it is.

**And** a 6X6 grid with category names across the top row, and points from 400 - 2000 below each category, doubling in each row.

**And** they see a box to enter their input, a Guess button, a Pass button.

**And** they see the scores of Player 1 and Player 2 displayed.

**And** a button to navigate to the next round.

## Final Jeopardy Navigation

**Given** the user is on the second round page.

**When** they click the button to the next round.

**Then** they are taken to the Final Round page.

## Final Round

**Given** the user is on the Final Round page.

**Then** they see a title indicating it's the Final Round.

**And** a single final category with a single final question.
