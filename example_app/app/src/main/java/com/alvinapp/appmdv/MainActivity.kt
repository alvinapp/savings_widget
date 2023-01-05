package com.alvinapp.appmdv

import android.net.Uri
import android.os.Bundle
import android.util.Log
import android.view.View
import android.webkit.ConsoleMessage
import android.webkit.WebChromeClient
import android.webkit.WebSettings
import android.webkit.WebView
import androidx.appcompat.app.AppCompatActivity

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val myWebView = findViewById<View>(R.id.mdv_web_view) as WebView
        myWebView.webChromeClient = object : WebChromeClient() {
            override fun onConsoleMessage(message: ConsoleMessage): Boolean {
                Log.d(
                    "SampleApp", "${message.message()} -- From line " +
                            "${message.lineNumber()} of ${message.sourceId()}"
                )
                return true
            }
        }
        val webSettings = myWebView.settings
        webSettings.javaScriptEnabled = true
        webSettings.loadWithOverviewMode = true
        webSettings.useWideViewPort = true
        webSettings.cacheMode = WebSettings.LOAD_DEFAULT
        val url = Uri.parse("http://52.72.25.150").buildUpon()
            .appendQueryParameter("publicKey", "E6CN-A7CqjU9hb86prRw9FQWg9jrLUqTo7M8sljfAdA")
            .appendQueryParameter("email", "harry@alvinapp.com")
            .appendQueryParameter("settings","{\"balanceView\":true,\"cardView\":true,\"transactionsView\":true}")
            .appendQueryParameter("styleUrl","")
            .build().toString()
        myWebView.loadUrl(url)
    }
}
