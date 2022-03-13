## easyRental front end

The easyRental website is created to provide a platform where users can put products 
for others to borrow and borrowers can search for products that they need temporarily. This website is built on the idea of 
making an airbnb but for household products. 

The given repository contains all the code and directions for the front-end of the website. 

We have built the front end of the website using reactJS.

Before installing reactJS, it is recommended to install WSL, instructions for which can be found
at: https://docs.microsoft.com/en-us/windows/wsl/install

You'll also need to install Node.js. Follow the instructions in the
given link: https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl

To install reactJS for windows, follow the instructions in the given link:
https://docs.microsoft.com/en-us/windows/dev-environment/javascript/react-on-windows.

For iOS installation, follow the instructions given in: https://randerson112358.medium.com/setup-react-native-environment-for-ios-97bf7faadf77

Apart from the react installation, we have also used the following packages:
* react-router-dom
* axios
* @mui/material/Container
* @mui/material/Paper
* @mui/material/Typography
* @mui/material/Button
* @mui/material/IconButton
* @mui/material/Toolbar
* @mui/material/Box
* @mui/material/AppBar

In order to install all the required packages, download the repository and use the command: 
#### npm install #####

Be mindful of the react-router-dom version. We have used the latest version v6. Several 
online codes use history and < Switch > which  were used in v5 but are no longer available in v6.
Instead we use < Routes > and useNavigate in v6.

In order to run the application use the command: 
#### npm start #####

We have created the following pages:
* Login
  ![Login](C:\easyRental\easyRental-frontend\images\login.png)
* Register
  ![Register](C:\easyRental\easyRental-frontend\images\registerUser.png)
* Register Confirmation
  ![regConfirm](C:\easyRental\easyRental-frontend\images\registerSuccesfull.png)
* Common landing
  ![landing](C:\easyRental\easyRental-frontend\images\userHome.png)
* Borrow product
  ![Borrow](C:\easyRental\easyRental-frontend\images\borrowProduct.png)
* Register product
  ![regProd](C:\easyRental\easyRental-frontend\images\registerProduct.png)