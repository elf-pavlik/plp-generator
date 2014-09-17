plp-generator
=============

Web application to generate person profiles for being stored in a decentralized manner.

Please, use https://etherpad.mozilla.org/U5VkledEfF for collaborative sketching/

http://schema.org/Person
http://schema.org/Organization
http://schema.org/Event
http://schema.org/Place


Which attributes we want to have on the form?

Supported by the Person schema
--------------------------------------------

Name -- Text
additionalName -- Text
description  -- Text
homeLocation -- Place
telephone -- Text
faxNumber  -- Text
image --  URL
WorkLocation -- ContactPoint/Place
birthDate -- Date
contactPoint  -- ContactPoint
jobTitle -- Text
memberOf -- Organization
employee  -- Ogganisation
organizer - Event
nationality -- Text
url -- URL
makesOffer -- Offer
Not supported but wished
currentLocation  -- Place

Supported by the Organisation schema
-----------------------------------------------------
name -- Text
address  -- PostalAddress
contactPoint -- ContactPoint
email --  Text
event -- Event
location -- Place
logo -- URL
seeks  -- Demand

Supported by the Event schema
-----------------------------------------------------
name -- Text
image -- URL
url -- URL
location -- Place
duration -- Duration
startDate -- Date
endDate -- Date
Performer - Person
description -- Text
 

