import mysql.connector.connection


conection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
)

cursor=conection.cursor()

query="""
    CREATE DATABASE Persea
"""


cursor.execute(query)
cursor.close()
conection.close()

conection = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="Persea"
)

cursor=conection.cursor()


#Plantacion
query="""
    CREATE TABLE Plantacion(
    id INT PRIMARY KEY,
    nombreParcela VARCHAR(50),
    fechaPlantacion DATE
    );
"""

cursor.execute(query)
conection.commit()







#PreparacionTerreno
query ="""
    CREATE TABLE PreparacionTerreno(
    id INT PRIMARY KEY,
    limpiezaTerreno DATE,
    analisisSuelo DATE,
    correcionSuelo DATE,
    labranza DATE,
    delimitacionParcela FLOAT(30),
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()

#SeleccionArboles
query ="""
    CREATE TABLE SeleccionArboles(
    id INT PRIMARY KEY,
    seleccionVariedades VARCHAR(30),
    preparacionColinos DATE,
    excavacionHoyos DATE,
    plantacion DATE,
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id) 
    );
"""

cursor.execute(query)
conection.commit()


#RiegoFertilizacion
query ="""
    CREATE TABLE RiegoFertilizacion(
    id INT PRIMARY KEY,
    tipoRiego VARCHAR(30),
    fechaRiego DATE,
    metodoAplicacionFertilizante VARCHAR(30),
    tipoFertilizante VARCHAR(30),
    nombreFertilizante VARCHAR(30),
    cantidadFertilizante FLOAT,
    medidaFertilizante VARCHAR(20),
    fechaFertilizante DATE,
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()


#MantenimientoMonitoreo
query ="""
    CREATE TABLE MantenimientoMonitoreo(
    id INT PRIMARY KEY,
    guadaña DATE,
    necesidadArboles VARCHAR(30),

    tipoTratamiento VARCHAR(30),
    estadoPlantaTratamiento VARCHAR(30),

    fechaAplicacionTratamiento VARCHAR(30),
    observacionEvolucionPlanta VARCHAR(30),
    fechaSeguimiento VARCHAR(30),
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()




#Poda
query ="""
    CREATE TABLE Poda(
    id INT PRIMARY KEY,
    tipoPoda VARCHAR(30),
    herramientasUsadas VARCHAR(60),
    tecnicasUsadas VARCHAR(60),
    fechaPoda DATE,
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()


#Cosecha
query ="""
    CREATE TABLE Cosecha(
    id INT PRIMARY KEY,
    cantidadCosechada FLOAT(30),
    calidadMediaCosechada VARCHAR(60),
    fechaCosecha DATE,
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()



#PostCosecha
query ="""
    CREATE TABLE PostCosecha(
    id INT PRIMARY KEY,
    cantidadMenos150 INT(30),
    cantidadMenos250 INT(60),
    cantidadMayor250 INT(60),
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()






#Notificaciones
query="""
    CREATE TABLE Notificaciones (
    id INT PRIMARY KEY,
    tipoNotificacion VARCHAR(50),
    fechaNotificacion DATE,
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()


#Informe
query="""
    CREATE TABLE Informe (
    id INT PRIMARY KEY,
    tipoInforme VARCHAR(50),
    fechaGeneracion DATE,
    idPlantacion INT,
    FOREIGN KEY(idPlantacion) REFERENCES Plantacion(id)
    );
"""

cursor.execute(query)
conection.commit()



#Usuario
query="""
    CREATE TABLE Usuario (
    id INT PRIMARY KEY,
    nombreUsuario VARCHAR(50),
    contraseñaUsuario VARCHAR(50)
    );
"""

cursor.execute(query)
conection.commit()

cursor.close()
conection.close()
