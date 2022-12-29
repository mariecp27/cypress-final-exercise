@carousel
Feature: Carousel working

    As a user of demoblaze store
    I want to see a summary of the products available
    So I know I will find the products I am interested on

    Background:
        Given I am in demoblaze home page

@regression @sanity @carousel @firstImageCarousel
    Scenario: Verify first image in the carousel
        Then The first image of the carousel should be displayed

@regression @sanity @carousel @firstImageCarousel
    Scenario: Verify the first image in the carousel through the right arrow button
        Given The third imagen in the carousel is displayed
        When I click on the right arrow button
        Then The displayed image should change to the first image in the carousel
    
@regression @sanity @carousel @secondImageCarousel
    Scenario: Verify the second image in the carousel through the right arrow button
        When I click on the right arrow button
        Then The displayed image should change to the second image in the carousel

@regression @sanity @carousel @thirdImageCarousel
    Scenario: Verify the third image in the carousel through the right arrow button
        Given The second imagen in the carousel is displayed
        When I click on the right arrow button
        Then The displayed image should change to the third image in the carousel

@regression @sanity @carousel @firstImageCarousel
    Scenario: Verify the first image in the carousel through the left arrow button
        Given The second imagen in the carousel is displayed
        When I click on the left arrow button
        Then The displayed image should change to the first image in the carousel

@regression @sanity @carousel @secondImageCarousel
    Scenario: Verify the second image in the carousel through the left arrow button
        Given The third imagen in the carousel is displayed
        When I click on the left arrow button
        Then The displayed image should change to the second image in the carousel

@regression @sanity @carousel @thirdImageCarousel
    Scenario: Verify the third image in the carousel through the left arrow button
        When I click on the left arrow button
        Then The displayed image should change to the third image in the carousel