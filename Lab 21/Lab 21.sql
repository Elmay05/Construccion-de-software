/*
- La suma de las cantidades e importe total de todas las entregas realizadas durante el 97.


SELECT SUM(E.cantidad),SUM(E.Cantidad*(M.precio*(1+M.impuesto/100))) as "Total"
FROM entregan E, materiales M
WHERE E.clave=M.clave AND YEAR(E.Fecha) = 1997; 
                    
- Para cada proveedor, obtener la razón social del proveedor, número de entregas e importe total de las entregas realizadas.

SELECT P.rfc,
    P.razonsocial, 
    COUNT(E.clave) AS 'NumeroEntregas', 
    SUM(E.cantidad * (M.precio * (1 + M.impuesto / 100))) AS 'ImporteTotal'
FROM proveedores P
JOIN entregan E ON P.rfc = E.rfc
JOIN materiales M ON E.clave = M.clave
GROUP BY razonsocial;

- Por cada material obtener la clave y descripción del material, la cantidad total entregada, la mínima cantidad entregada, la máxima cantidad entregada, el importe total de las entregas de aquellos materiales en los que la cantidad promedio entregada sea mayor a 400.

SELECT 
    M.Clave, 
    M.Descripcion, 
    SUM(E.Cantidad) AS CantidadTotalEntregada, 
    MIN(E.Cantidad) AS CantidadMinima, 
    MAX(E.Cantidad) AS CantidadMaxima, 
    SUM(E.Cantidad * M.Precio * (1 + M.Impuesto / 100)) AS ImporteTotal
FROM 
    materiales M
JOIN 
    entregan E ON M.Clave = E.Clave
GROUP BY 
    M.Clave, M.Descripcion
HAVING 
    AVG(E.Cantidad) > 400;


- Para cada proveedor, indicar su razón social y mostrar la cantidad promedio de cada material entregado, detallando la clave y descripción del material, excluyendo aquellos proveedores para los que la cantidad promedio sea menor a 500.


SELECT 
    P.RazonSocial, 
    M.Clave, 
    M.Descripcion, 
    AVG(E.Cantidad) AS CantidadPromedio
FROM 
    proveedores P
JOIN 
    entregan E ON P.RFC = E.RFC
JOIN 
    materiales M ON E.Clave = M.Clave
GROUP BY 
    P.RazonSocial, M.Clave, M.Descripcion
HAVING 
    AVG(E.Cantidad) >= 500;


- Mostrar en una solo consulta los mismos datos que en la consulta anterior pero para dos grupos de proveedores: aquellos para los que la cantidad promedio entregada es menor a 370 y aquellos para los que la cantidad promedio entregada sea mayor a 450.

SELECT
  P.RazonSocial, 
  M.Clave, 
  M.Descripcion, 
  AVG(E.Cantidad) AS CantidadPromedio
FROM proveedores P
JOIN entregan E ON P.RFC = E.RFC
JOIN materiales M ON E.Clave = M.Clave
GROUP BY P.RazonSocial, M.Clave, M.Descripcion
HAVING AVG(E.Cantidad) < 370 OR AVG(E.Cantidad) > 450;



- Clave y descripción de los materiales que nunca han sido entregados.

CREATE TABLE Materiales_No_Entregados (
    clave INT PRIMARY KEY,
    descripcion VARCHAR(255)
);
INSERT INTO Materiales_No_Entregados (clave, descripcion)
SELECT M.clave, M.descripcion
FROM materiales M
LEFT JOIN entregan E ON M.clave = E.clave
WHERE E.clave IS NULL;

- Razón social de los proveedores que han realizado entregas tanto al proyecto 'Vamos México' como al proyecto 'Querétaro Limpio'.

CREATE TABLE proveedores_entregas_proyectos (
    rfc VARCHAR(100) PRIMARY KEY,
    razonsocial VARCHAR(100)
);
INSERT INTO proveedores_entregas_proyectos (rfc, razonsocial)
SELECT P.rfc, P.razonsocial
FROM proveedores P
JOIN entregan E ON P.rfc = E.rfc
JOIN proyectos PR ON E.numero = PR.numero
WHERE PR.denominacion IN ('Vamos México', 'Querétaro Limpio')
GROUP BY P.rfc, P.razonsocial
HAVING COUNT(DISTINCT PR.denominacion) = 2;

INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
Materiales(clave, descripción, precio, impuesto)
Proveedores(rfc, razonsocial)
Proyectos(numero, denominacion)
Entregan(clave, rfc, numero, fecha, cantidad)
- Descripción de los materiales que nunca han sido entregados al proyecto 'CIT Yucatán'.

CREATE TABLE materiales_no_entregados (
    clave INT PRIMARY KEY,
    descripcion VARCHAR(100)
);
INSERT INTO materiales_no_entregados (clave, descripcion)
SELECT M.clave, M.descripcion
FROM materiales M
LEFT JOIN entregan E ON M.clave = E.clave
LEFT JOIN proyectos P ON E.numero = P.numero
WHERE P.denominacion = 'CIT Yucatán' AND E.clave IS NULL;

INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
Materiales(clave, descripción, precio, impuesto)
Proveedores(rfc, razonsocial)
Proyectos(numero, denominacion)
Entregan(clave, rfc, numero, fecha, cantidad)
- Razón social y promedio de cantidad entregada de los proveedores cuyo promedio de cantidad entregada es mayor al promedio de la cantidad entregada por el proveedor con el RFC 'VAGO780901'.

CREATE TABLE proveedores_promedio AS
SELECT 
    P.razonsocial, 
    AVG(E.cantidad) AS cantidadpromedio
FROM 
    proveedores P
JOIN 
    entregan E ON P.rfc = E.rfc
GROUP BY 
    P.razonsocial
HAVING 
    AVG(E.cantidad) > (
        SELECT AVG(E2.cantidad)
        FROM entregan E2
        WHERE E2.RFC = 'VAGO780901'
    );

INSERT INTO proveedores_promedio (razonsocial, cantidadpromedio)
SELECT 
    P.razonsocial, 
    AVG(E.cantidad) AS 'cantidadpromedio'
FROM 
    proveedores P
JOIN 
    entregan E ON P.rfc = E.rfc
GROUP BY 
    P.razonsocial
HAVING 
    AVG(E.cantidad) > (
        SELECT AVG(E2.cantidad)
        FROM entregan E2
        WHERE E2.rfc = 'VAGO780901'
    );
INSERT INTO tabla VALUES (valorcolumna1, valorcolumna2, [...] , valorcolumnan) ;
Materiales(clave, descripción, precio, impuesto)
Proveedores(rfc, razonsocial)
Proyectos(numero, denominacion)
Entregan(clave, rfc, numero, fecha, cantidad)
- RFC, razón social de los proveedores que participaron en el proyecto 'Infonavit Durango' y cuyas cantidades totales entregadas en el 2000 fueron mayores a las cantidades totales entregadas en el 2001.
CREATE TABLE proveedores_infonavit_durango AS
SELECT 
    P.RFC, 
    P.RazonSocial
FROM 
    proveedores P
JOIN 
    entregan E ON P.RFC = E.RFC
JOIN 
    proyectos PR ON E.numero = PR.numero
WHERE 
    PR.denominacion = 'Infonavit Durango'
GROUP BY 
    P.RFC, P.RazonSocial
HAVING 
    SUM(CASE WHEN YEAR(E.Fecha) = 2000 THEN E.Cantidad ELSE 0 END) > 
    SUM(CASE WHEN YEAR(E.Fecha) = 2001 THEN E.Cantidad ELSE 0 END);

-- Insertar los resultados en otra tabla si lo deseas (opcional).
INSERT INTO proveedores_infonavit_durango (RFC, RazonSocial)
SELECT 
    P.RFC, 
    P.RazonSocial
FROM 
    proveedores P
JOIN 
    entregan E ON P.RFC = E.RFC
JOIN 
    proyectos PR ON E.numero = PR.numero
WHERE 
    PR.denominacion = 'Infonavit Durango'
GROUP BY 
    P.RFC, P.RazonSocial
HAVING 
    SUM(CASE WHEN YEAR(E.Fecha) = 2000 THEN E.Cantidad ELSE 0 END) > 
    SUM(CASE WHEN YEAR(E.Fecha) = 2001 THEN E.Cantidad ELSE 0 END);

*/