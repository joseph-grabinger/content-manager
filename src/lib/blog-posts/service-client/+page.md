---
title: Service Client
author: Joseph
date: 2022-04-15
layout: blog
excerpt: Service-Client connects to API to get notified when batches are added.
---

# Batch-Scanner-Service-Client

Batch-Scanner-API: https://github.com/dunef-com/batch-scanner-api

Uses websockets to communicate with the Batch-Scanner-API. 

Hook ist registered on ```/v1/ws/socket/hook``` endpoint of the Batch-Scanner-API.

Hook can be unregistered by sending ```^C```.

When the service-client recieves a incoming batch, it then exports each entry to a separate excel-file and saves them under the hardcoded path.

# Example 

Let´s say a ```BatchEvent``` cotaining to following contents is recieved: 

Batch description: 
```"Wareneingang"```

Configuration columns: 
```["ID", "Supplier", "Material", "Station", "Size", "Thickness"]```

Batch´s JSON-value: 
```
{
    "023453": {
        "Supplier": "Company XY",
        "Material": "Steel",
        "Station": "Station 4",
        "Size": "65x42",
        "Thickness": "43"
    },
    "726453": {
        "Supplier": "Supplier XY",
        "Material": "Aluminum",
        "Station": "Station 1",
        "Size": "30x30",
        "Thickness": "10"
    }
}
```

Since the batch contains two entries, two seperate excel files will be created.

The excel files` names and contents will accord to the following manner:

Excel file #1: ```Wareneingang-29.09.2022-13-10-1.xlsx```

ID | Supplier | Material | Station | Size | Thickness
--- | --- | --- | --- |--- |---
023453 | Company XY | Steel | Station 4 | 65x42 | 43 

Excel file #2: ```Wareneingang-29.09.2022-13-10-2.xlsx```

ID | Supplier | Material | Station | Size | Thickness
--- | --- | --- | --- |--- |---
726453 | Supplier XY | Aluminum | Station 1 | 30x30 | 10


P.S.: In the shown example the Date and Time is assumed to be 29.09.2022 13:10 
