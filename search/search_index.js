const local_index = {"config":{"indexing":"full","lang":["en"],"min_search_length":3,"prebuild_index":false,"separator":"[\\s\\-]+"},"docs":[{"location":"index.html","text":"documentation Documentation reports and diagrams","title":"documentation"},{"location":"index.html#documentation","text":"Documentation reports and diagrams","title":"documentation"},{"location":"Context%20Map.html","text":"Domain Analysis Impact Mapping Subdomain & Context Analysis E-Scooter Subdomain Core Subdomain Scooter Monitor Context One of the core contexts. Responsible for keeping track of scooter positions, battery level and other useful data for ma#ny business use cases. Scooter State Context Responsible for defining control policies to be applied to e-scooters according to domain/business policies. Scooter Physical Control Context Responsible for all physical actuation of logic control policies. Scooter Data Context Storage of e-scooters technical and logical static information, like ID, serial number, dimensions, weight... Scooter Search Context Uses data from the Scooter Monitor Context to provide the search functionality to customers (that are looking for available scooters to ride). Trip Subdomain Core Subdomain Area of Service Context Keeps track of service areas, scooter-area bindings and scooter position in order to detect escapes. Rent Context Handles the process of scooter renting from the beginning to its end. Trip Context Data collection about trips done by all customers. Insight Subdomain Core Subdomain Drop points Planning Context Exploits usage data from other contexts to compute drop point locations or suggestions. Payment Subdomain Supporting Subdomain Payment Context Manages all customer in-app transactions, virtual currency, and triggers real-world transactions. User Subdomain Generic Subdomain Customer Context Keeps track of customers anagraphic data. Auth Context Manages login data and role based authorization for all agents, including employees and customers. Context Map TODO","title":"Domain Analysis"},{"location":"Context%20Map.html#domain-analysis","text":"","title":"Domain Analysis"},{"location":"Context%20Map.html#impact-mapping","text":"","title":"Impact Mapping"},{"location":"Context%20Map.html#subdomain-context-analysis","text":"","title":"Subdomain &amp; Context Analysis"},{"location":"Context%20Map.html#e-scooter-subdomain","text":"Core Subdomain","title":"E-Scooter Subdomain"},{"location":"Context%20Map.html#scooter-monitor-context","text":"One of the core contexts. Responsible for keeping track of scooter positions, battery level and other useful data for ma#ny business use cases.","title":"Scooter Monitor Context"},{"location":"Context%20Map.html#scooter-state-context","text":"Responsible for defining control policies to be applied to e-scooters according to domain/business policies.","title":"Scooter State Context"},{"location":"Context%20Map.html#scooter-physical-control-context","text":"Responsible for all physical actuation of logic control policies.","title":"Scooter Physical Control Context"},{"location":"Context%20Map.html#scooter-data-context","text":"Storage of e-scooters technical and logical static information, like ID, serial number, dimensions, weight...","title":"Scooter Data Context"},{"location":"Context%20Map.html#scooter-search-context","text":"Uses data from the Scooter Monitor Context to provide the search functionality to customers (that are looking for available scooters to ride).","title":"Scooter Search Context"},{"location":"Context%20Map.html#trip-subdomain","text":"Core Subdomain","title":"Trip Subdomain"},{"location":"Context%20Map.html#area-of-service-context","text":"Keeps track of service areas, scooter-area bindings and scooter position in order to detect escapes.","title":"Area of Service Context"},{"location":"Context%20Map.html#rent-context","text":"Handles the process of scooter renting from the beginning to its end.","title":"Rent Context"},{"location":"Context%20Map.html#trip-context","text":"Data collection about trips done by all customers.","title":"Trip Context"},{"location":"Context%20Map.html#insight-subdomain","text":"Core Subdomain","title":"Insight Subdomain"},{"location":"Context%20Map.html#drop-points-planning-context","text":"Exploits usage data from other contexts to compute drop point locations or suggestions.","title":"Drop points Planning Context"},{"location":"Context%20Map.html#payment-subdomain","text":"Supporting Subdomain","title":"Payment Subdomain"},{"location":"Context%20Map.html#payment-context","text":"Manages all customer in-app transactions, virtual currency, and triggers real-world transactions.","title":"Payment Context"},{"location":"Context%20Map.html#user-subdomain","text":"Generic Subdomain","title":"User Subdomain"},{"location":"Context%20Map.html#customer-context","text":"Keeps track of customers anagraphic data.","title":"Customer Context"},{"location":"Context%20Map.html#auth-context","text":"Manages login data and role based authorization for all agents, including employees and customers.","title":"Auth Context"},{"location":"Context%20Map.html#context-map","text":"TODO","title":"Context Map"},{"location":"Ubiquitous%20Language.html","text":"Ubiquitous Language E-Scooter service A service that allows customers to rent electric scooters placed in public areas for a trip within the boundaries of an area of service . Electric Scooter Alias: e-scooter, scooter Motorized vehicle with two wheels, usable by a person standing on it. It's equipped with some sensors and other devices. E-Scooter equipment Electric engine Uses power from the battery to power the front wheel spin. Wheels and tires The scooter runs on two wheels with air-inflated tires; the front wheel containes a rotating electric engine . Battery Scooter power supply; rechargeable; electric; has finite capacity, power... GPS sensor Global Positioning System; estimates a position on Earth by negotiating it with satellites; based on a free service; works better in open places Speedometer Measures wheel rounds per second Accelerometer Measures acceleration forces along the three axis Electronic wheel block Alias: electric break, electric block If turned on, the wheel becomes very hard to rotate Headlight Light source embedded in the front to enable night usage Manual Breaks Alias: Breaks, default breaks, disk breaks, rear break Friction based stopping system; Placed on the back wheel; Controlled by a hand lever. Accelerator Handle that controls the speed; If the handle isn't turned the electric break is activated. Speaker A device that can play sounds and can be remotely activated. Mode Alias: State One of the possible states in which the scooter can be. In each mode, the scooter has a different behavior. Active mode A mode in which the scooter has no electric limit on power. Power Saving mode A mode in which the scooter uses electrically limited power in order to save battery. This happens after the battery gets below a threshold Power Saving threshold The battery level below which the scooter enters Power Saving mode. Standby mode A mode in which the scooter is disabled due to extremely low battery. Standby threshold The battery level below which the scooter enters Standby mode. Operations Unlock To turn off the electric block Lock To turn on the electric block . Ride Use the scooter to move. Disable To deny the possibility that a customer pays for unlocking the scooter. Enable To allow the possibility that a customer pays for unlocking the scooter. Maintain Repair any damage and/or recharge the battery. Rent As a customer , paying or exploiting a subscription for unlocking an e-scooter . This action lasts until the scooter is locked again (in normal conditions). Assign to area An e-scooter can be assigned to an area if, from that moment, that e-scooter mutually exclusively belongs to that area . Recover See recovery . Ring Make the speaker play a ringtone, useful to find it. Relationships Belong to area The e-scooter can be only rented inside that area . Customer A customer for the e-scooter service . Anagraphic information Collection of data about the customer, including first name, date of birth, and all the other possible information useful for the e-scooter service . Subscription A customer has it if they are able to rent e-scooters without paying upfront. Recovery The act of picking up an e-scooter , providing maintenance and dropping it somewhere inside the area of service sometime later. The scooter may be unlocked if necessary. Recovery assistant Alias: assistant, employee. Works for the e-scooter service and does recoveries with a recovery van . Recovery van A vehicle that allows assistants to recover e-scooters . Map Bidimensional, polar representation of the Earth surface. Shows, for example, streets, buildings, water courses; what scooters can or cannot cross. Area of service Alias: Service Area The map portion inside which e-scooters assigned to it can be rented. Drop Point A place of interest, inside an area of service, where electric scooter are usually dropped after recovery . Trip Information about a rent period, during and after its lasting. Properties Rider The rider is the customer that rents the e-scooter during the trip. Vehicle The scooter used for transportation. Distance The distance, in meters, traveled during the trip. Start position Alias: start A point inside the area of service where the vehicle was unlocked . End position Alias: end A point inside the map where the vehicle was locked because the rent ended. Payment A payment can be either: - a real-world payment - an in-app payment Payment legacy system The preexisting service that manages customer data and payments for the e-scooter service . Virtual Currency The amount of imaginary money for every customer. Used to pay scooter rents . It can be obtained through real-world purchases . In-App Payment Alias: in-app purchase It's a virtual currency transaction inside the system. Real-world payment Alias: real-world purchase It's a money transaction from the customer to the business bank account.","title":"Ubiquitous Language"},{"location":"Ubiquitous%20Language.html#ubiquitous-language","text":"","title":"Ubiquitous Language"},{"location":"Ubiquitous%20Language.html#e-scooter-service","text":"A service that allows customers to rent electric scooters placed in public areas for a trip within the boundaries of an area of service .","title":"E-Scooter service"},{"location":"Ubiquitous%20Language.html#electric-scooter","text":"Alias: e-scooter, scooter Motorized vehicle with two wheels, usable by a person standing on it. It's equipped with some sensors and other devices.","title":"Electric Scooter"},{"location":"Ubiquitous%20Language.html#e-scooter-equipment","text":"","title":"E-Scooter equipment"},{"location":"Ubiquitous%20Language.html#electric-engine","text":"Uses power from the battery to power the front wheel spin.","title":"Electric engine"},{"location":"Ubiquitous%20Language.html#wheels-and-tires","text":"The scooter runs on two wheels with air-inflated tires; the front wheel containes a rotating electric engine .","title":"Wheels and tires"},{"location":"Ubiquitous%20Language.html#battery","text":"Scooter power supply; rechargeable; electric; has finite capacity, power...","title":"Battery"},{"location":"Ubiquitous%20Language.html#gps-sensor","text":"Global Positioning System; estimates a position on Earth by negotiating it with satellites; based on a free service; works better in open places","title":"GPS sensor"},{"location":"Ubiquitous%20Language.html#speedometer","text":"Measures wheel rounds per second","title":"Speedometer"},{"location":"Ubiquitous%20Language.html#accelerometer","text":"Measures acceleration forces along the three axis","title":"Accelerometer"},{"location":"Ubiquitous%20Language.html#electronic-wheel-block","text":"Alias: electric break, electric block If turned on, the wheel becomes very hard to rotate","title":"Electronic wheel block"},{"location":"Ubiquitous%20Language.html#headlight","text":"Light source embedded in the front to enable night usage","title":"Headlight"},{"location":"Ubiquitous%20Language.html#manual-breaks","text":"Alias: Breaks, default breaks, disk breaks, rear break Friction based stopping system; Placed on the back wheel; Controlled by a hand lever.","title":"Manual Breaks"},{"location":"Ubiquitous%20Language.html#accelerator","text":"Handle that controls the speed; If the handle isn't turned the electric break is activated.","title":"Accelerator"},{"location":"Ubiquitous%20Language.html#speaker","text":"A device that can play sounds and can be remotely activated.","title":"Speaker"},{"location":"Ubiquitous%20Language.html#mode","text":"Alias: State One of the possible states in which the scooter can be. In each mode, the scooter has a different behavior.","title":"Mode"},{"location":"Ubiquitous%20Language.html#active-mode","text":"A mode in which the scooter has no electric limit on power.","title":"Active mode"},{"location":"Ubiquitous%20Language.html#power-saving-mode","text":"A mode in which the scooter uses electrically limited power in order to save battery. This happens after the battery gets below a threshold","title":"Power Saving mode"},{"location":"Ubiquitous%20Language.html#power-saving-threshold","text":"The battery level below which the scooter enters Power Saving mode.","title":"Power Saving threshold"},{"location":"Ubiquitous%20Language.html#standby-mode","text":"A mode in which the scooter is disabled due to extremely low battery.","title":"Standby mode"},{"location":"Ubiquitous%20Language.html#standby-threshold","text":"The battery level below which the scooter enters Standby mode.","title":"Standby threshold"},{"location":"Ubiquitous%20Language.html#operations","text":"","title":"Operations"},{"location":"Ubiquitous%20Language.html#unlock","text":"To turn off the electric block","title":"Unlock"},{"location":"Ubiquitous%20Language.html#lock","text":"To turn on the electric block .","title":"Lock"},{"location":"Ubiquitous%20Language.html#ride","text":"Use the scooter to move.","title":"Ride"},{"location":"Ubiquitous%20Language.html#disable","text":"To deny the possibility that a customer pays for unlocking the scooter.","title":"Disable"},{"location":"Ubiquitous%20Language.html#enable","text":"To allow the possibility that a customer pays for unlocking the scooter.","title":"Enable"},{"location":"Ubiquitous%20Language.html#maintain","text":"Repair any damage and/or recharge the battery.","title":"Maintain"},{"location":"Ubiquitous%20Language.html#rent","text":"As a customer , paying or exploiting a subscription for unlocking an e-scooter . This action lasts until the scooter is locked again (in normal conditions).","title":"Rent"},{"location":"Ubiquitous%20Language.html#assign-to-area","text":"An e-scooter can be assigned to an area if, from that moment, that e-scooter mutually exclusively belongs to that area .","title":"Assign to area"},{"location":"Ubiquitous%20Language.html#recover","text":"See recovery .","title":"Recover"},{"location":"Ubiquitous%20Language.html#ring","text":"Make the speaker play a ringtone, useful to find it.","title":"Ring"},{"location":"Ubiquitous%20Language.html#relationships","text":"","title":"Relationships"},{"location":"Ubiquitous%20Language.html#belong-to-area","text":"The e-scooter can be only rented inside that area .","title":"Belong to area"},{"location":"Ubiquitous%20Language.html#customer","text":"A customer for the e-scooter service .","title":"Customer"},{"location":"Ubiquitous%20Language.html#anagraphic-information","text":"Collection of data about the customer, including first name, date of birth, and all the other possible information useful for the e-scooter service .","title":"Anagraphic information"},{"location":"Ubiquitous%20Language.html#subscription","text":"A customer has it if they are able to rent e-scooters without paying upfront.","title":"Subscription"},{"location":"Ubiquitous%20Language.html#recovery","text":"The act of picking up an e-scooter , providing maintenance and dropping it somewhere inside the area of service sometime later. The scooter may be unlocked if necessary.","title":"Recovery"},{"location":"Ubiquitous%20Language.html#recovery-assistant","text":"Alias: assistant, employee. Works for the e-scooter service and does recoveries with a recovery van .","title":"Recovery assistant"},{"location":"Ubiquitous%20Language.html#recovery-van","text":"A vehicle that allows assistants to recover e-scooters .","title":"Recovery van"},{"location":"Ubiquitous%20Language.html#map","text":"Bidimensional, polar representation of the Earth surface. Shows, for example, streets, buildings, water courses; what scooters can or cannot cross.","title":"Map"},{"location":"Ubiquitous%20Language.html#area-of-service","text":"Alias: Service Area The map portion inside which e-scooters assigned to it can be rented.","title":"Area of service"},{"location":"Ubiquitous%20Language.html#drop-point","text":"A place of interest, inside an area of service, where electric scooter are usually dropped after recovery .","title":"Drop Point"},{"location":"Ubiquitous%20Language.html#trip","text":"Information about a rent period, during and after its lasting.","title":"Trip"},{"location":"Ubiquitous%20Language.html#properties","text":"","title":"Properties"},{"location":"Ubiquitous%20Language.html#rider","text":"The rider is the customer that rents the e-scooter during the trip.","title":"Rider"},{"location":"Ubiquitous%20Language.html#vehicle","text":"The scooter used for transportation.","title":"Vehicle"},{"location":"Ubiquitous%20Language.html#distance","text":"The distance, in meters, traveled during the trip.","title":"Distance"},{"location":"Ubiquitous%20Language.html#start-position","text":"Alias: start A point inside the area of service where the vehicle was unlocked .","title":"Start position"},{"location":"Ubiquitous%20Language.html#end-position","text":"Alias: end A point inside the map where the vehicle was locked because the rent ended.","title":"End position"},{"location":"Ubiquitous%20Language.html#payment","text":"A payment can be either: - a real-world payment - an in-app payment","title":"Payment"},{"location":"Ubiquitous%20Language.html#payment-legacy-system","text":"The preexisting service that manages customer data and payments for the e-scooter service .","title":"Payment legacy system"},{"location":"Ubiquitous%20Language.html#virtual-currency","text":"The amount of imaginary money for every customer. Used to pay scooter rents . It can be obtained through real-world purchases .","title":"Virtual Currency"},{"location":"Ubiquitous%20Language.html#in-app-payment","text":"Alias: in-app purchase It's a virtual currency transaction inside the system.","title":"In-App Payment"},{"location":"Ubiquitous%20Language.html#real-world-payment","text":"Alias: real-world purchase It's a money transaction from the customer to the business bank account.","title":"Real-world payment"},{"location":"Use%20Cases.html","text":"Use Cases User stories Some user stories are taken from end users and some other are taken from the business representative, business employees. 1a - Search of a scooter As a customer, I want to open the mobile application and search for free scooters in my area. 1b - Choose and find a scooter As a customer, I want to be able to select a scooter near myself and make it ring in order to find it if it's hidden. 1c - Rent a scooter As a customer, I want to confirm on my phone and start riding. When I'm done, I want to leave the scooter where I can and confirm the end of the trip on the app. 2 - Battery level As a customer, when I'm searching a scooter, I want to know its battery level in advance. 3a - Area of service policy When a scooter is taken out of the area of service borders, it locks. 3b - Customer notification of the area border As a customer, when I'm approaching the area of service border, I want to be warned about the possibility that my scooter gets locked. How do you want to get warned? I'd like the scooter to play a specific sound, while I get a notification on my phone. 4 - Power save policy When the battery goes below a threshold, the scooter enters a power save mode, during which it runs slower than normal. 5 - Customer notification of battery usage As a customer, I want to be warned when the battery is running low. I want to be warned with a ringtone. 6 - Battery exhausted policy When the battery is running low, the scooter warns the customer, if present, that the run must end and enters a standby mode during which it's disabled. 7 - Monitoring of scooters As the business manager, I want to be able to see the position and the battery level of every scooter in a map. 8 - Insights from the system As the business manager, I want to get suggestions about strategic places for the drop points of the next day. 9 - Unlock policy for employees. As a business employee I want to be able to unlock freely the scooters in order to move them. 10 - Vandalism prevention The scooter should discourage theft and vandalism by playing a message when moved while locked or disabled. 11 - Integration with legacy payment system As the business manager, I want the customers to pay for rides through the existing system. Does the legacy system keep track of all customers data? If I remember correctly, yes. From the legacy system documentation: The legacy payment system needs access to trip data and to customers rent/unlock requests. Use Case Diagram Story Diagrams Story #1 Diagram","title":"Use Cases"},{"location":"Use%20Cases.html#use-cases","text":"","title":"Use Cases"},{"location":"Use%20Cases.html#user-stories","text":"Some user stories are taken from end users and some other are taken from the business representative, business employees.","title":"User stories"},{"location":"Use%20Cases.html#1a-search-of-a-scooter","text":"As a customer, I want to open the mobile application and search for free scooters in my area.","title":"1a - Search of a scooter"},{"location":"Use%20Cases.html#1b-choose-and-find-a-scooter","text":"As a customer, I want to be able to select a scooter near myself and make it ring in order to find it if it's hidden.","title":"1b - Choose and find a scooter"},{"location":"Use%20Cases.html#1c-rent-a-scooter","text":"As a customer, I want to confirm on my phone and start riding. When I'm done, I want to leave the scooter where I can and confirm the end of the trip on the app.","title":"1c - Rent a scooter"},{"location":"Use%20Cases.html#2-battery-level","text":"As a customer, when I'm searching a scooter, I want to know its battery level in advance.","title":"2 - Battery level"},{"location":"Use%20Cases.html#3a-area-of-service-policy","text":"When a scooter is taken out of the area of service borders, it locks.","title":"3a - Area of service policy"},{"location":"Use%20Cases.html#3b-customer-notification-of-the-area-border","text":"As a customer, when I'm approaching the area of service border, I want to be warned about the possibility that my scooter gets locked. How do you want to get warned? I'd like the scooter to play a specific sound, while I get a notification on my phone.","title":"3b - Customer notification of the area border"},{"location":"Use%20Cases.html#4-power-save-policy","text":"When the battery goes below a threshold, the scooter enters a power save mode, during which it runs slower than normal.","title":"4 - Power save policy"},{"location":"Use%20Cases.html#5-customer-notification-of-battery-usage","text":"As a customer, I want to be warned when the battery is running low. I want to be warned with a ringtone.","title":"5 - Customer notification of battery usage"},{"location":"Use%20Cases.html#6-battery-exhausted-policy","text":"When the battery is running low, the scooter warns the customer, if present, that the run must end and enters a standby mode during which it's disabled.","title":"6 - Battery exhausted policy"},{"location":"Use%20Cases.html#7-monitoring-of-scooters","text":"As the business manager, I want to be able to see the position and the battery level of every scooter in a map.","title":"7 - Monitoring of scooters"},{"location":"Use%20Cases.html#8-insights-from-the-system","text":"As the business manager, I want to get suggestions about strategic places for the drop points of the next day.","title":"8 - Insights from the system"},{"location":"Use%20Cases.html#9-unlock-policy-for-employees","text":"As a business employee I want to be able to unlock freely the scooters in order to move them.","title":"9 - Unlock policy for employees."},{"location":"Use%20Cases.html#10-vandalism-prevention","text":"The scooter should discourage theft and vandalism by playing a message when moved while locked or disabled.","title":"10 - Vandalism prevention"},{"location":"Use%20Cases.html#11-integration-with-legacy-payment-system","text":"As the business manager, I want the customers to pay for rides through the existing system. Does the legacy system keep track of all customers data? If I remember correctly, yes. From the legacy system documentation: The legacy payment system needs access to trip data and to customers rent/unlock requests.","title":"11 - Integration with legacy payment system"},{"location":"Use%20Cases.html#use-case-diagram","text":"","title":"Use Case Diagram"},{"location":"Use%20Cases.html#story-diagrams","text":"","title":"Story Diagrams"},{"location":"Use%20Cases.html#story-1-diagram","text":"","title":"Story #1 Diagram"}]}; var __search = { index: Promise.resolve(local_index) }