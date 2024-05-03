<%@ page import="java.sql.*" %>
<%@ page import="java.io.*,java.util.*" %>
<%@ page contentType="text/html;charset=UTF-8" %>
<html>
<head>
    <title>Contact Form</title>
</head>
<body>
    <%
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String message = request.getParameter("message");

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/contact?characterEncoding=utf8","root","1238");

            PreparedStatement ps = con.prepareStatement("INSERT INTO contact_info (name, email, message) VALUES (?, ?, ?)");
            ps.setString(1, name);
            ps.setString(2, email);
            ps.setString(3, message);
            ps.executeUpdate();

            out.println("<h2>Data submitted successfully!</h2>");

            con.close();
        } catch (Exception e) {
            out.println("<h2>Error submitting data: " + e.getMessage() + "</h2>");
        }
    %>
</body>
