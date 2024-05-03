

<%@ page errorPage="MyError.jsp" %>
<%@page import="java.sql.*"  %>
<%@page import="java.sql.*"  %>
<%@page import=" java.io.*"  %>
<%@page import=" javax.servlet.*" %> 
<%@page import ="javax.servlet.http.*" %> 
<%@page import ="java.sql.*" %>
<html>
	<body>
		<% 
		
		String user_name=request.getParameter("u_name");
		String pass_word=request.getParameter("p_word");
		PrintWriter pw=response.getWriter();
		int c=0;
		pw.print(user_name);
		try {

			Class.forName("com.mysql.jdbc.Driver");
			Connection con=DriverManager.getConnection("jdbc:mysql://localhost:3306/project1?characterEncoding=utf8","root","1238");
			Statement st=con.createStatement();
			ResultSet rs=st.executeQuery("select * from projet");
			while(rs.next()){ 
				if(pass_word.equals(rs.getString(2)) && user_name.equals(rs.getString(1))){
					c=1;
		 		}
			
			}
			if(c==1)
			{
				response.sendRedirect("index.html");
			}
			else
			{
				response.sendRedirect("error.html");
			}
		}
		finally
		{
		}
		%>
		 
	</body>
</html>
