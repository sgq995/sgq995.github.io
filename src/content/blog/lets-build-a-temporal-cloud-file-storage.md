---
title: "Let's build a temporal cloud file storage"
description: "Easy temporal file sharing tool"
pubDate: "Aug 04 2023"
image: "/assets/lets-build-a-temporal-cloud-file-storage/banner.svg"
category: "Side Project"
tags: ["cloud", "side project", "build in public"]
isDraft: false
---

Some time ago, I wanted to share some SSH keys between my devices so that I would be able to log in to my GitHub account. At that time, I didn't find any trusted and secure service because I neither knew how to search for one nor found someone whom I would trust enough.

Later on, I discovered some good and free-to-use services, as well as paid options. Those services have interesting features which we will explore in this post. Recently, I wanted to start with Supabase, so it's time for another project.

Allow me to introduce to you my temporary file share service.

## Features

First, what about defining the features to include for this project? And, what about seeing what's on the market now?

There are many services like this out there, a fast search in Google will show up many temporal file service providers. There are paid ones, completely free, a literal copy of another one, and even I've seen open-source. 

Generally they follow some rules:
* Autodelete after some time or downloads
* Anonimous uploading
* Easy link share system (Some of them are using QR codes)
* User dashboard or API endpoints

I'll try to keep those rules and iterate over other features. I mainly focus on providing an easy way to share privacy-sensitive data so that every file uploaded to the server is encrypted before reaching it. I'm thinking of end-to-end encryption for every file so it's a must to have the decryption key, defined at the time the file is uploaded, to be able to get the original file.

## Tools
* [Astro](https://astro.build)
* [Solid](https://solidjs.com)
* [NestJS](https://nestjs.com)
* [SQLite](https://www.sqlite.org)

I'm searching for a stack for my following projects, I've tried Astro and I will keep it for a long time. Next on the list would be Svelte/SvelteKit.

## Costs

As said before, some of the projects out there are open-source or totally free. Some of them monetize via donations and advertisements. There is another one that will cost up to $99 offering unlimited options. I hope unlimited options are profitable.

This project will include a free plan and probably a paid one. I'd add the API as a paid feature and probably advertisements for the free plan user interface.

## How to use it?

When you enter the site, a big square is displayed encouraging you to click it or drop a file, an extra field for an auto-generated password is available. Once the file is selected, the file gets encrypted and uploaded to the server. Then, a link and the password will be shown on the screen.

The user interface to download files is only showing the password field and the download button. It'll download the file and then try to decrypt it using the provided password. The API will receive a field to provide the password to decrypt the file but the password won't be stored in the server.

## Do you have any suggestion?

You can reach me on Twitter (now X) [@segoqu95](https://twitter.com/segoqu95). Please provide a link to this post.
