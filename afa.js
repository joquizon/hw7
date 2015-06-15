console.log("check check");

setInterval(function()
							{
							    var today = new Date();
							    
							    var h = today.getHours();
							    
							    var m = today.getMinutes();
							    
							    var seconds = today.getSeconds();
			                    
			                    var str = document.getElementById("motto").innerHTML; 
                                
                                var res1 = str.replace("HELP US FIGHT FOR ARTISTS", "Donate for the arts ");
                                
                                var res2 = str.replace("Donate for the arts ", "ART UNFOLDS ");
                                
                                var res3 = str.replace("ART UNFOLDS ", "SPARK A FIRE ");
  								
  								var res4 = str.replace("SPARK A FIRE", "FOR THE REBEL HEARTED ");

  								var res5 = str.replace("FOR THE REBEL HEARTED", "FOR THE TALENTED ");

  								var res6 = str.replace("FOR THE TALENTED", "DONATE TODAY ");

  								var res7 = str.replace("DONATE TODAY", "FOR THE UNIQUE ");

  								var res8 = str.replace("FOR THE UNIQUE", "for the whimsical ");

  								var res8a = str.replace("for the whimsical ", "DONATE TODAY");

  								var res9 = str.replace("DONATE TODAY ", "FOR THE UNREAL ");

  								var res10 = str.replace("FOR THE UNREAL", "FIGHT FOR ART");

  								var res11 = str.replace("FIGHT FOR ART", "FOR FLYING COLORS");

  								var res12 = str.replace("FOR FLYING COLORS", "HELP TODAY");

  								var res13 = str.replace("HELP TODAY", "SUPPORT INNOVATION");

  								var res14 = str.replace("SUPPORT INNOVATION", "DONATE TODAY");

  								var res15 = str.replace("DONATE TODAY", "for the future");

  								var res16 = str.replace("for the future", "DONATE TODAY");

  								var res17 = str.replace("DONATE TODAY", "HELP US FIGHT FOR ARTISTS");

			  if ( seconds >= 0 && seconds <= 3 )
			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('ptg3.gif')";
					
					document.getElementById("motto").innerHTML = 
						res1;

					document.getElementById("motto").style.fontFamily = "rurable";

					document.getElementById("motto").style.fontSize = "120px";

					document.getElementById("motto").style.color = "#F20000";

					document.getElementById("afaheader").src= "afalogo.png";	
			  		
			  	} 

			  else if (seconds >=4 && seconds <=6)
			  	
			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('sculpt.gif')";
					
					document.getElementById("motto").innerHTML = 
						res2;

					document.getElementById("motto").style.fontFamily = "code";

					document.getElementById("motto").style.fontSize = "240px";

					document.getElementById("motto").style.color = "#F20000";
			  		
			  	}

			  	else if (seconds >=7 && seconds <=9)

			  	 {   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('spark.gif')";
					
					document.getElementById("motto").innerHTML = 
						res3;

					document.getElementById("motto").style.fontFamily = "uncon";

					document.getElementById("motto").style.fontSize = "150px";

					document.getElementById("motto").style.color = "#FFFFFF";

					document.getElementById("afaheader").src= "afalogowhite.png";
			  		
			  	}

			  	else if (seconds >=10 && seconds <=12)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('art.gif')";
					
					document.getElementById("motto").innerHTML = 
						res4;

					document.getElementById("motto").style.fontFamily = "registration";

					document.getElementById("motto").style.fontSize = "96px";

					document.getElementById("motto").style.color = "#FFA300";

					document.getElementById("afaheader").src= "afalogo.png";
			  		
			  	}
			  	
			  	else if (seconds >=13 && seconds <=15)	

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('dwg.gif')";
					
					document.getElementById("motto").innerHTML = 
						res5;

					document.getElementById("motto").style.fontFamily = "sciencefair";

					document.getElementById("motto").style.fontSize = "150px";

					document.getElementById("motto").style.paddingTop = "5%";

					document.getElementById("motto").style.color = "#000000";
			  		
			  	}

			  	else if (seconds >=16 && seconds <=18)	
				
		 		{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('ptg5.gif')";
					
					document.getElementById("motto").innerHTML = 
						res6;

					document.getElementById("motto").style.fontFamily = "neutron";

					document.getElementById("motto").style.fontSize = "153px";

					document.getElementById("motto").style.color = "#FFB600";
			  		
			  	}

			  	else if (seconds >=19 && seconds <=21)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('art2.gif')";
					
					document.getElementById("motto").innerHTML = 
						res7;

					document.getElementById("motto").style.fontFamily = "sciencefair";

					document.getElementById("motto").style.fontSize = "161px";

					document.getElementById("motto").style.color = "#00C1AA";	
			  	}

			  	else if (seconds >=22 && seconds <=24)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('calder.gif')";
					
					document.getElementById("motto").innerHTML = 
						res8;

					document.getElementById("motto").style.fontFamily = "lacomp";

					document.getElementById("motto").style.fontSize = "220px";

					document.getElementById("motto").style.color = "#C10000";	
			  	}


			  	else if (seconds >=25 && seconds <=27)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('dwg3.gif')";

			  		document.getElementById("motto").innerHTML = 
						res8a;

					document.getElementById("motto").style.fontFamily = "registration";

					document.getElementById("motto").style.fontSize = "120px";

					document.getElementById("motto").style.color = "#C10000";	

					document.getElementById("afaheader").src= "afalogowhite.png";
			  	}
			  	else if (seconds >=28 && seconds <=30)

			  	 {   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('dali.gif')";

			  		document.getElementById("motto").innerHTML = 
						res9;

					document.getElementById("motto").style.fontFamily = "registration";

					document.getElementById("motto").style.fontSize = "120px";

					document.getElementById("motto").style.color = "#C10000";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}

			  	else if (seconds >=31 && seconds <=33)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('picasso.gif')";

			  		document.getElementById("motto").innerHTML = 
						res10;

					document.getElementById("motto").style.fontFamily = "rounded";

					document.getElementById("motto").style.fontSize = "180px";

					document.getElementById("motto").style.color = "#BFB100";	

					document.getElementById("afaheader").src= "afalogo.png";

			  	}

			  	else if (seconds >=34 && seconds <=36)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('ptg4.gif')";

			  		document.getElementById("motto").innerHTML = 
						res11;

					document.getElementById("motto").style.fontFamily = "sportsjersey";

					document.getElementById("motto").style.fontSize = "230px";

					document.getElementById("motto").style.color = "#04AA9D";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}

			  	else if (seconds >=37 && seconds <=39)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('photo.gif')";

			  		document.getElementById("motto").innerHTML = 
						res12;

					document.getElementById("motto").style.fontFamily = "paragon";

					document.getElementById("motto").style.fontSize = "230px";

					document.getElementById("motto").style.color = "#00DDCD";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}
			  	
			  	else if (seconds >=40 && seconds <=42)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('pollock.gif')";

			  		document.getElementById("motto").innerHTML = 
						res13;

					document.getElementById("motto").style.fontFamily = "primetime";

					document.getElementById("motto").style.fontSize = "130px";

					document.getElementById("motto").style.color = "#C40000";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}

			  	else if (seconds >=43 && seconds <=45)

		 		{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('ptg2.gif')";

			  		document.getElementById("motto").innerHTML = 
						res14;

					document.getElementById("motto").style.fontFamily = "neutron";

					document.getElementById("motto").style.fontSize = "180px";

					document.getElementById("motto").style.color = "#00FFF2";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}

			  	else if (seconds >=46 && seconds <=48)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('dwg2.gif')";

			  		document.getElementById("motto").innerHTML = 
						res15;

					document.getElementById("motto").style.fontFamily = "japan";

					document.getElementById("motto").style.fontSize = "200px";

					document.getElementById("motto").style.color = "#00FFF2";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}

			  	else if (seconds >=49 && seconds <=51)

			  	{   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('dwg4.gif')";

			  		document.getElementById("motto").innerHTML = 
						res16;

					document.getElementById("motto").style.fontFamily = "uncon";

					document.getElementById("motto").style.fontSize = "180px";

					document.getElementById("motto").style.color = "#FFB90B";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}

			  else
			  	 {   
			  		document.getElementById("mainbg").style.backgroundImage = 
			  			"url('ptg.gif')";

			  		document.getElementById("motto").innerHTML = 
						res17;

					document.getElementById("motto").style.fontFamily = "mike";

					document.getElementById("motto").style.fontSize = "90px";


					document.getElementById("motto").style.paddingTop = "5%";

					document.getElementById("motto").style.color = "#BED800";

					document.getElementById("afaheader").src= "afalogowhite.png";	

			  	}

			},3000);