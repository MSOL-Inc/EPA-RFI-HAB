# EPA-RFI-HAB

Description: The code on this GitHub repository is created in response to the U.S. Environmental Protection Agency (EPA) Request for Information (RFI) to demonstrate Macro Solutions practices to provide digital services. Macro Solutions has provided digital service capabilities to its existing clients in the areas of agile software development, agile architecture, modular development, test-driven development and DevOps. 

This README file outlines the objective of the small project that Macro Solutions built using agile Scrum sprints to demonstrate the agile software development practice. Given the short duration of the response Macro solutions selected to work on an application idea from EPA's application showcase called Harmful Algal Bloom Reporting App (HABs). (Details available at http://developer.epa.gov/hab-challenge/)

Harmful algal blooms are a major environmental problem in all 50 states. Known as red tides, blue-green algae, or cyanobacteria, harmful algal blooms have severe impacts on human health, aquatic ecosystems and the economy. The objective of HAB App is to develop an application that will make it convenient and accessible for citizen scientists to report sightings of HABs. The information submitted through the application can be used to display HAB trends in local waterways. Displaying these trends could help raise awareness and influence forecasting and preventive measures implemented by states to reduce impact of HABs on human health.

Code Considerations: In order to keep the scope of HAB's application contained such that it can be addressed over a single sprint cycle, the following decisions were made as part of backlog grooming:
1) Keep the form simple such that the main idea about the application is demonstrate-able.
2) Solution is built around the web browser form but the same form should be usable over other form factors including tablets or smartphones. 
3) The form submission capability is contained on the client side only to minimize the application design, development and deployment complexitity. 

The detailed approach on building this application is described in a separate document from this README file that is submitted along with the RFI response. The application code is a set of HTML, CSS and JS files that can be accessed from the GitHub URL https://github.com/MSOL-Inc/EPA-RFI-HAB. Step by step instructions access this code and use it for demonstration purposes are as follows:

Code access and application use steps:
1) Click the following URL, https://github.com/MSOL-Inc/EPA-RFI-HAB, or cut and paste it into your browser. 
2) Click the "Download Zip" button on the right side of the page
3) Unzip the files and save them to your desktop
4) Click on "BloomReportForm.html" to open it in the web browser. (Note: This application was extensively tested in Firefox. For best results use Firefox browser. Other browsers can be used however user experience might vary.)
5) Complete the form fields in the Algae Bloom Report form. 
6) When finished, click "Submit"
7) The system will summarize your input in an email in your default email program. (Note: The "To" address field contains a dummy email address in order to prevent smap emails to a valid mailbox. Hence sending the email should fail as an intended step for this demonstration application.)

