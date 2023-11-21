<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>7ea Dashboard</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f6f8fa;
      color: #1a1a1a;
    }

    header {
      background-color: #fff;
      color: #1a1a1a;
      padding: 10px 20px;
      text-align: center;
      font-size: 18px;
    }

    nav {
      background-color: #fff;
      padding: 10px;
      text-align: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    nav a {
      color: #333;
      text-decoration: none;
      padding: 10px;
      margin: 5px 0;
      cursor: pointer;
      font-size: 16px;
    }

    .container {
      margin: 20px;
      padding: 20px;
      background-color: #fff;
      border: 1px solid #ddd;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
    }

    h1 {
      color: #1a1a1a;
    }

    .widget {
      margin-bottom: 20px;
      border: 1px solid #ddd;
      padding: 20px;
      border-radius: 10px;
      display: none;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .action-button {
      background-color: #61dafb;
      border: none;
      color: white;
      padding: 12px 24px;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 14px;
      margin: 10px 0;
      cursor: pointer;
      border-radius: 5px;
      transition: background-color 0.3s ease;
    }

    .action-button:hover {
      background-color: #3a8bd6;
    }

    .visible {
      display: block;
    }
  </style>
  <script>
    function showWidget(widgetId) {
      var widgets = document.querySelectorAll('.widget');
      widgets.forEach(function(widget) {
        widget.classList.remove('visible');
      });

      var selectedWidget = document.getElementById(widgetId);
      if (selectedWidget) {
        selectedWidget.classList.add('visible');
      }
    }
  </script>
</head>
<body>

  <header>
    <h1 style="color: #000;">7ea Dashboard</h1>
  </header>


<nav>
  <a onclick="showWidget('recentActivity')">Recent Activity</a>
  <a onclick="showWidget('statistics')">Statistics</a>
  <a onclick="showWidget('apps')">Apps</a>
  <a onclick="showWidget('personal')">Personal</a>
</nav>

<div class="container">
  <div class="widget" id="recentActivity">
    <h2>Recent Activity</h2>
    <p>Display recent activities and updates here.</p>
    <button class="action-button" onclick="showUserDetails()">View Details</button>
  </div>

  <div class="widget" id="statistics">
    <h2>Statistics</h2>
    <p>Show key statistics and metrics.</p>
    <button class="action-button" onclick="showUserDetails()">View Details</button>
  </div>

  <div class="widget" id="apps">
    <!-- Content for the Apps widget goes here -->
  </div>

  <div class="widget" id="personal">
    <h2>Personal</h2>
    <button class="toggle-button" onclick="toggleUserDetails()" id="userButton">Show Data</button>
    <div class="user-details" id="userDetails">
      <!-- User details will be displayed here -->
    </div>
  </div>

</div>
    <!-- Add more widgets and content as needed -->

  </div>

</body>
</html>
