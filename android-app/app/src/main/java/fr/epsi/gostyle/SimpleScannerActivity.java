package fr.epsi.gostyle;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.view.ViewGroup;
import android.widget.Toast;

import com.android.volley.Request;
import com.android.volley.RequestQueue;
import com.android.volley.Response;
import com.android.volley.VolleyError;
import com.android.volley.VolleyLog;
import com.android.volley.toolbox.StringRequest;
import com.android.volley.toolbox.Volley;
import com.google.zxing.Result;

import me.dm7.barcodescanner.zxing.ZXingScannerView;

public class SimpleScannerActivity extends BaseScannerActivity implements ZXingScannerView.ResultHandler {
    private ZXingScannerView mScannerView;

    @Override
    public void onCreate(Bundle state) {
        super.onCreate(state);
        setContentView(R.layout.scan);

        ViewGroup contentFrame = (ViewGroup) findViewById(R.id.content_frame);
        mScannerView = new ZXingScannerView(this);
        contentFrame.addView(mScannerView);
    }

    @Override
    public void onResume() {
        super.onResume();
        mScannerView.setResultHandler(this);
        mScannerView.startCamera();
    }

    @Override
    public void onPause() {
        super.onPause();
        mScannerView.stopCamera();
    }

    @Override
    public void handleResult(Result rawResult) {
        // Time between each scan, disabling this can cause the app to freeze
        Handler handler = new Handler();
        handler.postDelayed(new Runnable() {
            @Override
            public void run() {
                mScannerView.resumeCameraPreview(SimpleScannerActivity.this);
            }
        }, 5000);

        String url = rawResult.getText();
        System.out.println(url);

        String[] idPromoInQRCode = url.split("/");

        final Intent myIntent = new Intent(this, MainActivity.class);
        startActivity(myIntent);

        String updatePromotionOfUser = "http://172.20.10.3:3000/promos/" + idPromoInQRCode[idPromoInQRCode.length-1] + "/1";
        RequestQueue queue = Volley.newRequestQueue(this);

        StringRequest stringRequest = updatePromotionOfUser(updatePromotionOfUser);
        queue.add(stringRequest);
    }

    private StringRequest updatePromotionOfUser(String updatePromotionOfUser) {
        return new StringRequest(Request.Method.POST, updatePromotionOfUser,
                new Response.Listener<String>() {
                    @Override
                    public void onResponse(String response) {
                        try {
                            Toast.makeText(SimpleScannerActivity.this, "Promotion ajoutée à l'utilisateur.", Toast.LENGTH_SHORT).show();
                        } catch (Exception e) {
                            e.printStackTrace();
                        }
                    }
                }, new Response.ErrorListener() {
            @Override
            public void onErrorResponse(VolleyError error) {
                VolleyLog.e("Error: " + error.toString());
            }
        });
    }
}
